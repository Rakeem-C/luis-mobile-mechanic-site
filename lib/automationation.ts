export type ServiceRequestFormData = {
  name: string;
  phone: string;
  vehicle: string;
  issue: string;
  location: string;
  preferredTime: string;
};

export type AutomationationLeadPayload = {
  source: string;
  contact: {
    name: string;
    phone: string;
  };
  vehicle: {
    description: string;
  };
  serviceRequest: {
    issueSummary: string;
    requestedTime: string;
    serviceArea: string;
  };
  tags: string[];
};

export function mapToAutomationationLead(
  form: ServiceRequestFormData,
  source = "ricos-mobile-mechanic-site"
): AutomationationLeadPayload {
  return {
    source,
    contact: {
      name: form.name,
      phone: form.phone,
    },
    vehicle: {
      description: form.vehicle,
    },
    serviceRequest: {
      issueSummary: form.issue,
      requestedTime: form.preferredTime,
      serviceArea: form.location,
    },
    tags: ["ricos-mobile-mechanic", "phoenix-mobile-mechanic"],
  };
}

export const automationationIntegrationNotes = {
  contact:
    "Replace the placeholder API route with the Automationation intake endpoint or server action while keeping this mapper as the compatibility layer.",
  booking:
    "Replace the placeholder booking panel with the Automationation booking calendar component or embed.",
};
