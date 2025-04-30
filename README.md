# sample-js-oidc

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

Instructions on how to install and set up the project.

1. Clone Repository from URL
```bash
git clone https://github.com/tochiman/sample-js-OIDC.git
```
2. change directory
```bash
cd sample-js-OIDC
```

## Usage

How to use the project.

1. Start Container of Docker 
```bash
docker compose up -d
```
2. Access the following URL

| ServiceName | URL |
|----------|----------|
| Keycloak    | http://<your ipaddress or domain>:8080/    |
| nginx(web)   | https://<your ipaddress or domain>/    |

> [!NOTE]
> Use "test/test" in Keycloak admin console login
3. Create Reamls and Role, User, ClientID...

4. Access the URL of Nginx

## License

> [!IMPORTANT]
> This repository includes the work that is distributed in the Apache [License 2.0](LICENSE).