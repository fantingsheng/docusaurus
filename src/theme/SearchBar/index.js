import React, { useRef, useCallback, forwardRef, useState, useImperativeHandle } from "react";
import classnames from "classnames";
import { useHistory, useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { usePluginData } from '@docusaurus/useGlobalData';
import useIsBrowser from "@docusaurus/useIsBrowser";

const Search = forwardRef((props, ref) => {
  
  const initialized = useRef(false);
  const searchBarRef = useRef();
  const [indexReady, setIndexReady] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { siteConfig = {} } = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  const { baseUrl } = siteConfig;
  const initAlgolia = (searchDocs, searchIndex, DocSearch) => {
      new DocSearch({
        searchDocs,
        searchIndex,
        baseUrl,
        inputSelector: "#search_input_react",
        // Override algolia's default selection event, allowing us to do client-side
        // navigation and avoiding a full page refresh.
        handleSelected: (_input, _event, suggestion) => {
          const url = suggestion.url || "/";
          // Use an anchor tag to parse the absolute url into a relative url
          // Alternatively, we can use new URL(suggestion.url) but its not supported in IE
          const a = document.createElement("a");
          a.href = url;
          // Algolia use closest parent element id #__docusaurus when a h1 page title does not have an id
          // So, we can safely remove it. See https://github.com/facebook/docusaurus/issues/1828 for more details.

          history.push(url);
        }
      });
  };

  useImperativeHandle(ref, () => ({
    get input() {
      return searchBarRef.current;
    }
  }))

  const pluginData = usePluginData('docusaurus-lunr-search');
  const getSearchDoc = () =>
    process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.searchDoc}`).then((content) => content.json())
      : fetch(`${baseUrl}search-doc.json`).then((content) => content.json());

  const getLunrIndex = () =>
    process.env.NODE_ENV === "production"
      ? fetch(`${baseUrl}${pluginData.fileNames.lunrIndex}`).then((content) => content.json())
      : fetch(`${baseUrl}lunr-index.json`).then((content) => content.json());

  const loadAlgolia = () => {
    if (!initialized.current) {
      Promise.all([
        getSearchDoc(),
        getLunrIndex(),
        import("./DocSearch"),
        import("./algolia.css")
      ]).then(([searchDocs, searchIndex, { default: DocSearch }]) => {
        if (searchDocs.length === 0) {
          return;
        }
        initAlgolia(searchDocs, searchIndex, DocSearch);
        setIndexReady(true);
        if (location.search && location.search.includes('?value=')) {
          const val = location.search.replace('?value=', '')
          searchBarRef.current.value = val;
        }
      });
      initialized.current = true;
    }
  };

  const toggleSearchIconClick = useCallback(
    e => {
      if (!searchBarRef.current.contains(e.target)) {
        searchBarRef.current.focus();
      }

      props.handleSearchBarToggle && props.handleSearchBarToggle(!props.isSearchBarExpanded);
    },
    [props.isSearchBarExpanded]
  );

  if (isBrowser && props.show) {
    loadAlgolia();

    return (
      <div className="navbar__search" key="search-box">
        <span
          aria-label="expand searchbar"
          role="button"
          className={classnames("search-icon", {
            "search-icon-hidden": props.isSearchBarExpanded
          })}
          onClick={toggleSearchIconClick}
          onKeyDown={toggleSearchIconClick}
          tabIndex={0}
        />
        <input
          id="search_input_react"
          type="search"
          placeholder={indexReady ? '请输入你要搜索的内容' : '加载中...'}
          aria-label="Search"
          className={classnames(
            "navbar__search-input",
            { "search-bar-expanded": props.isSearchBarExpanded },
            { "search-bar": !props.isSearchBarExpanded }
          )}
          onClick={loadAlgolia}
          onMouseOver={loadAlgolia}
          onFocus={toggleSearchIconClick}
          onBlur={toggleSearchIconClick}
          ref={searchBarRef}
          disabled={!indexReady}
        />
      </div>
    );
  }
  return <></>
});

export default Search;
