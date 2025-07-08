export type Address = number;
export type Action = "pickup" | "dropoff" | null;
export type Step = {
  address: Address;
  action: Action;
};

export interface SuccessResult {
  status: "success";
  steps: Step[];
}

export interface ErrorResult {
  status: "error";
  error_code: string;
  error_message: string;
}

export type Result = SuccessResult | ErrorResult;