/* eslint-disable no-undef */
function follow(id,authToken, isFollow) {
    chrome.runtime.sendMessage({case:'followUser', id, authToken, isFollow})
  }

const getNumber = (value) => {
  if (value < 1000) return `${value}`;
  else if (value > 1000 && value < 1000000) return `${(value / 1000).toFixed(0)}k`;
  else return `${(value / 1000000).toFixed(0)}m`;
}

  
  const insertCakeButton = (data,authToken) => {
    if (!document.querySelector('div button.btn')) {
      const insertContainer = document.querySelector('#top-row .style-scope .ytd-video-secondary-info-renderer')
      const cakeBtnContainer = document.createElement('div')
      cakeBtnContainer.innerHTML = `<button class="btn">Cak3<span class="badge-youtube-btn">${getNumber(data.data.followers)}</span></button>`
      insertContainer.insertAdjacentElement('beforeend', cakeBtnContainer);
      document.querySelector('div button.btn').addEventListener('click', follow(data.data.id, authToken, data.data.isFollow));
    }
  
  }

  const getInfo = async(authToken, channelLink) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
  
    chrome.storage.sync.get('apiUrl').then(apiUrl => {
      fetch(`${apiUrl}/api/user/platform?link=${channelLink}`, requestOptions)
      .then(response => {
        response.text().then(text => {
          const data = JSON.parse(text);
          insertCakeButton(data,authToken);
        })
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }); 
  }

  
  const timer = () => {
    setTimeout(() => {
      if (document.querySelector('.ytd-video-owner-renderer a[href]')) {
        let channelHref = document.querySelector('.ytd-video-owner-renderer a[href]').href;
        channelHref = channelHref.slice(channelHref.lastIndexOf('/') + 1);
        const windowHref = location.href;

        if (windowHref.includes('watch')) {
          chrome.storage.sync.get('authToken', (token)=> {
            if(token?.authToken) {
              getInfo(token.authToken, channelHref)
            }
          })
          
        }
      } else {
        timer()
      }
    }, 1000);
  }
  
  window.addEventListener('load', () => {
    timer()
  }, false)
  
  window.addEventListener('popstate', () => {
    timer();
  }, false)
  
  
  
  
  
  