import { requestGitHubAPI } from './utils';

function fetchDocList() {
  const data = requestGitHubAPI();
  return data.map(({ number, title, body, labels }) => {
    return {
      number,
      title,
      body,
      labels,
    };
  })
}

export default fetchDocList;
