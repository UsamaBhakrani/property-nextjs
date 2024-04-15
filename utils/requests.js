const URL = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const fetchProperties = async () => {
  try {
    // handle the case where domain is not available
    if (!URL) {
      return [];
    }
    const res = await fetch(`${URL}/properties`);
    if (!res.ok) {
      throw new Error("Failed to Fetch Data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSingleProperty = async (id) => {
  try {
    // handle the case where domain is not available
    if (!URL) {
      return null;
    }
    const res = await fetch(`${URL}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to Fetch Data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
