let SERVER_URL;
if (process.env.NODE_ENV === "production") {
  SERVER_URL = "https://marketplace.dvstr.net";
} else {
  SERVER_URL = "http://127.0.0.1:8000";
}

export const MEDIA_URL = SERVER_URL + "/api/media/";
export const API_URL = SERVER_URL + "/api/";
// export const API_URL = "http://backend:8000/api/";
