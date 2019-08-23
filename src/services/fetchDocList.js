import { requestGitHubAPI } from './utils';

function fetchDocList(param = '') {
  const data = requestGitHubAPI(null, param);
  return data.map(({ number, title, body, labels }) => {
    return {
      number,
      title,
      body,
      labels,
    };
  });
}

export default fetchDocList;
