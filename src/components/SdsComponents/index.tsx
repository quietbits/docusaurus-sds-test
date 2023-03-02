export const sdsImport = async () => {
  const SDS = await import("@stellar/design-system");

  console.log(">>> SDS: ");
  console.log(SDS);
  console.log("   ");

  return SDS;
};
