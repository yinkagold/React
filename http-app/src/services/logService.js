import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://477a347e095a4dfd9e56456ec9c6ad5c@sentry.io/4069793"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
