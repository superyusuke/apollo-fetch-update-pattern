import { WebSocketLink } from "@apollo/client/link/ws";

const websocketUri = process.env.REACT_APP_WEBSOCKET_LINK as string;

export const createLink = (authToken?: string) => {
  const authHeader = authToken ? { Authorization: `Bearer ${authToken}` } : {};

  const wsLink = new WebSocketLink({
    uri: websocketUri,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          ...authHeader,
        },
      },
    },
  });

  return wsLink;
};
