import { useEffect } from 'react';

function insertScript(code, position = 'headEnd') {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.text = code;

  switch (position) {
    case 'headStart':
      document.head.prepend(script);
      break;
    case 'headEnd':
      document.head.appendChild(script);
      break;
    case 'bodyStart':
      document.body.prepend(script);
      break;
    case 'bodyEnd':
      document.body.appendChild(script);
      break;
    default:
      document.head.appendChild(script);
  }
}

export default function Home() {
  useEffect(() => {
    async function fetchAndInject() {
      try {
        const res = await fetch('/api/getGtmScripts');
        const data = await res.json();

        if (data.headStart) insertScript(data.headStart, 'headStart');
        if (data.headEnd) insertScript(data.headEnd, 'headEnd');
        if (data.bodyStart) insertScript(data.bodyStart, 'bodyStart');
        if (data.bodyEnd) insertScript(data.bodyEnd, 'bodyEnd');
      } catch (e) {
        console.error('注入脚本失败', e);
      }
    }
    fetchAndInject();
  }, []);

  return (
    <div>
      <h1>动态插入 GTM 脚本示例</h1>
      <p>打开浏览器控制台看日志</p>
    </div>
  );
}
