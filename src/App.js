import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialize Zoho SalesIQ
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src = "https://salesiq.zohopublic.in/widget?wc=siq82b9d6d4b63e82fa291605d20c983e9307520071694e0c09a111f904723f6086";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        {/* Your content here */}
      </body>
    </>
  );
}

export default App;
