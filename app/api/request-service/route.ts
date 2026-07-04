import { NextResponse } from "next/server";
import {
  mapToAutomationationLead,
  type ServiceRequestFormData,
} from "@/lib/automationation";

export async function POST(request: Request) {
  const body = (await request.json()) as ServiceRequestFormData & {
    integrationSource?: string;
  };

  // Future integration point: send `automationationLead` to the real
  // Automationation contact intake endpoint or server action.
  return NextResponse.json({
    ok: true,
    message: "Service request received by placeholder endpoint.",
    received: body,
    automationationLead: mapToAutomationationLead(
      body,
      body.integrationSource ?? "ricos-mobile-mechanic-and-tint-site"
    ),
  });
}
