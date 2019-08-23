import $ from 'jquery';

function requestGitHubAPI(id = null, param = '') {
  const baseUrl = 'https://api.github.com/repos/ParkSB/wikiwikiwi-docs/issues';  
  let url = baseUrl;  

  if (id) {
    url += `/${id}`; 
  }

  if (param) {
    url += `?${param}`;
  }

  return $.ajax({
    url,
    dataType: 'JSON',
    async: false,
  }).responseJSON;
}

export { requestGitHubAPI };
