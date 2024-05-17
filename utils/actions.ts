interface OneLiner {
  id: number;
  status: "published" | "draft" | "archived";
  sort: number;
  title: string;
  description: string | null;
  code: string;
}
export async function getOneLiners() {
  try {
    const oneLinersResponse = await fetch(
      `https://directus.probir.dev/items/one_liner_js?filter[status][_eq]=published`,
    );

    if (!oneLinersResponse.ok) {
      return { success: false, message: "Error fetching one-liners" };
    }

    const oneLinersData = await oneLinersResponse.json();

    return { success: true, data: oneLinersData.data as OneLiner[] };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: `Internal Server Error: ${error.message}`,
    };
  }
}
