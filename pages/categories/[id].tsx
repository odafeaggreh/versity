import React from "react";
import Layout from "../../components/desktop/layout";
import { List } from "../../components/desktop/subcategories";
import getCategoryDetails from "../../lib/getCategoryDetails";
import getCategoryIds from "../../lib/getCategoryIds";

export default function Category({categoryData}) {
    console.log(categoryData);
    
	return (
		<Layout home={false}>
			<div>
                <List data={categoryData.payload[0].subcategory} />
            </div>
		</Layout>
	);
}

export async function getStaticPaths() {
	// Return a list of possible value for id
	let paths = await getCategoryIds()

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch necessary data for the blog post using params.id
    const categoryData = await getCategoryDetails(params.id)
    return {
        props: {
            categoryData
        }
      }
}
