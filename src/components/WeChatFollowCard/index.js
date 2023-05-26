import React from 'react';
export default function WeChatFollowCard() {
  return (
    <div className="row">
      <div className="col col--6 col--offset-3">
        <div className='card'>
          <div class="card__image">
            <img
              src={require('@site/static/img/qrcode.png').default} />
          </div>
          <div className="card__body">
            <h4>太空编程</h4>
            <small>分享硬核的前端知识</small>
          </div>
          <div className="card__footer"></div>
        </div>
      </div>
    </div>
  )
}
