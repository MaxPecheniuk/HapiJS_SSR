let port = 9080;
if(process.env.NODE_ENV === "production") {
  port = 8080
}
export const apiUrl = `http://localhost:${port}/api/post`;


