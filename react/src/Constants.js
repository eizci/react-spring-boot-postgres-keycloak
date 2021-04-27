const prod = {
  url: {
    KEYCLOAK_BASE_URL: "https://keycloak.restreview.com",
    API_BASE_URL: 'https://www.restreview.com',
  }
}

const dev = {
  url: {
    KEYCLOAK_BASE_URL: "http://localhost:8080",
    API_BASE_URL: 'http://localhost:8081/api/v1',
  }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod