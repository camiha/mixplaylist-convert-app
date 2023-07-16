import { rest } from "msw";
import { API_URL } from "@/config/constants";
import { sampleHandlers } from "./sample";

export const handlers = [
  ...sampleHandlers,
  rest.get(`${API_URL}/healthcheck`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ healthy: true }));
  }),
];
