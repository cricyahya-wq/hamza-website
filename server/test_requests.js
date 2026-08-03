const http = require("http");

async function req(method, path, headers = {}, body = null) {
  return new Promise((resolve) => {
    const options = {
      hostname: "127.0.0.1",
      port: 4000,
      path,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    const request = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({ status: res.statusCode, data });
      });
    });

    if (body) {
      request.write(JSON.stringify(body));
    }
    request.end();
  });
}

async function main() {
  console.log("Sending OPTIONS request...");
  let res = await req("OPTIONS", "/api/contact");
  console.log("OPTIONS status:", res.status);

  console.log("\nSending POST 1 (valid body)...");
  res = await req("POST", "/api/contact", { "X-Forwarded-For": "203.0.113.195, 70.41.3.18" }, {
    name: "John",
    email: "john@example.com",
    message: "Hello this is a test.",
    company: "Test Co"
  });
  console.log("POST 1 status:", res.status, res.data);

  console.log("\nSending POST 2 (invalid body)...");
  res = await req("POST", "/api/contact", { "X-Forwarded-For": "203.0.113.195" }, {
    email: "bad"
  });
  console.log("POST 2 status:", res.status, res.data);

  console.log("\nSending POST 3 (valid body)...");
  res = await req("POST", "/api/contact", { "X-Forwarded-For": "203.0.113.195" }, {
    name: "John",
    email: "john@example.com",
    message: "Hello this is a test.",
    company: "Test Co"
  });
  console.log("POST 3 status:", res.status, res.data);
  
  console.log("\nSending POST 4 (valid body)...");
  res = await req("POST", "/api/contact", { "X-Forwarded-For": "203.0.113.195" }, {
    name: "John",
    email: "john@example.com",
    message: "Hello this is a test.",
    company: "Test Co"
  });
  console.log("POST 4 status:", res.status, res.data);

  console.log("\nSending POST 5 (valid body)...");
  res = await req("POST", "/api/contact", { "X-Forwarded-For": "203.0.113.195" }, {
    name: "John",
    email: "john@example.com",
    message: "Hello this is a test.",
    company: "Test Co"
  });
  console.log("POST 5 status:", res.status, res.data);
  
  console.log("\nSending POST 6 (valid body)...");
  res = await req("POST", "/api/contact", { "X-Forwarded-For": "203.0.113.195" }, {
    name: "John",
    email: "john@example.com",
    message: "Hello this is a test.",
    company: "Test Co"
  });
  console.log("POST 6 status:", res.status, res.data);
}

main().catch(console.error);
