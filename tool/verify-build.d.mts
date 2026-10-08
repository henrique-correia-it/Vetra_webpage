export type VerificationResult = { ok: boolean; errors: string[] };
export function verifyBuild(distPath: string): VerificationResult;
