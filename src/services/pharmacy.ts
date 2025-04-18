/**
 * Represents a pharmacy.
 */
export interface Pharmacy {
  /**
   * The ID of the pharmacy.
   */
  id: string;
  /**
   * The name of the pharmacy.
   */
  name: string;
  /**
   * The address of the pharmacy.
   */
  address: string;
}

/**
 * Asynchronously retrieves a list of pharmacies.
 *
 * @returns A promise that resolves to an array of Pharmacy objects.
 */
export async function getPharmacies(): Promise<Pharmacy[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      id: '1',
      name: 'Pharmacy A',
      address: '123 Main St',
    },
    {
      id: '2',
      name: 'Pharmacy B',
      address: '456 Elm St',
    },
  ];
}
