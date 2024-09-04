import axios from "axios";

const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const tableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME;
const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(airtableUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Filter out records with empty fields
    const filteredRecords = response.data.records.filter(record => Object.keys(record.fields).length > 0);

    console.log("Filtered data from Airtable:", filteredRecords);
    return filteredRecords;
  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    return [];
  }
};
