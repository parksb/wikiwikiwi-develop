import $ from 'jquery';

function requestGitHubAPI(id = null) {
  const baseUrl = 'https://api.github.com/repos/ParkSB/parksb-wiki-docs/issues';  
  return $.ajax({
    url: id ? `${baseUrl}/${id}` : baseUrl,
    dataType: 'JSON',
    async: false,
  }).responseJSON;
}

export { requestGitHubAPI };
