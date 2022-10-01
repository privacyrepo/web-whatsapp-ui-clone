async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.NEXT_PUBLIC_WEBINY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.WEBINY_API_SECRET}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}
export async function getAllJobsWithSlug() {
  const data = await fetchAPI(`
    query JobSlugs {
      listJobs {
        data {
          slug
        }
      }
    }
  `);
  return data.listJobs.data;
}
export async function getJobBySlug(slug) {
  const data = await fetchAPI(
    `
      query JobsBySlug( $JobGetWhereInput: JobGetWhereInput!) {
        job: getJob( where: $JobGetWhereInput ) {
          data {
            id
            position
            slug
            description
            createdOn
            featured
            
            company {
              companyName
              slug
              logo
            }
          }
        }
        moreJobs: listJobs(limit: 2, sort: createdOn_ASC) {
          data {
            id
            position
            slug
            description
            createdOn
            featured
            
            company {
              companyName
              slug
              logo
            }
          }
        }
      }
    `,
    {
      variables: {
        JobGetWhereInput: {
          slug: slug,
        },
      },
    }
  );
  console.log("222222222222222222222222222", data);
  return data;
}
