import base from "fuegojs/dist/base";
import { z } from "zod";

const pageInstanceLink = z.object({
  uuid: z.string().uuid().describe("primary"),
  pageUuid: z.string().uuid(),
  notebookPageId: z.string().describe("unique"),
  instance: z.string().describe("unique"),
  app: z.number().max(Math.pow(2, 8)).describe("unique"),
});

export const onlineClient = z.object({
  id: z.string().describe("primary"),
  instance: z.string().describe("unique"),
  app: z.number().max(Math.pow(2, 8)).describe("unique"),
  created_date: z.date(),
});

const clientSession = z.object({
  id: z.string().describe("primary"),
  instance: z.string().describe("unique"),
  app: z.number().max(Math.pow(2, 8)).describe("unique"),
  createdDate: z.date(),
  endDate: z.date(),
  disconnectedBy: z.string(),
});

const message = z.object({
  uuid: z.string().uuid().describe("primary"),
  sourceInstance: z.string(),
  sourceApp: z.number().max(Math.pow(2, 8)),
  targetInstance: z.string(),
  targetApp: z.number().max(Math.pow(2, 8)),
  createdDate: z.date(),
  marked: z.boolean(),
});

const ongoingMessage = z.object({
  uuid: z.string().uuid().describe("primary"),
  chunk: z.number().describe("unique"),
  messageUuid: z.string().uuid().describe("unique"),
});

const schema = {
  pageInstanceLink,
  onlineClient,
  clientSession,
  message,
  ongoingMessage,
};

base({
  projectName: "samepage.network",
  safeProjectName: "samepage-network",
  emailDomain: "samepage.network",
  clerkDnsId: "l7zkq208u6ys",
  schema,
  variables: ["convertkit_api_key", "password_secret_key"],
});
