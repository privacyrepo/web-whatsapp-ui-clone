async function fetchAPI(query, { variables } = {}) {
  const url = read
    ? process.env.NEXT_PUBLIC_WEBINY_API_READ_URL
    : process.env.NEXT_PUBLIC_WEBINY_API_manage_URL;
  const res = await fetch(url, {
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
            title
            slug
            description
            createdOn
            featured
            
            company {
              name
              slug
              logo
            }
          }
        }
        moreJobs: listJobs(limit: 2, sort: createdOn_ASC) {
          data {
            id
            title
            slug
            description
            createdOn
            featured
            
            company {
              name
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
export async function addJob(data) {
  const response = await fetchAPI(
    `
   mutation createJob($title:String!,$description:String!){
    createJob(data:{title:$title,description:$description}){
     data {
      id
      title
      description
      createdOn
     }
    }
   }
  `,
    {
      variables: {
        title: data.title,
        description: data.description,
      },
    },
    false
  );
  return response.createJob.data;
}

export async function publishJob(data) {
  const response = await fetchAPI(
    `
   mutation publishJob($id:ID!){
    publishJob(revision:$id){
     data {
      id
      title
      description
     }
    }
   }
  `,
    {
      variables: {
        id: data.id,
      },
    },
    false
  );
  return response.publishJob.data;
}
export async function addCompany(data) {
  const response = await fetchAPI(
    `
   mutation createCompany($name:String!,$email:String!){
    createCompany(data:{name:$name,email:$email}){
     data {
      id
      name
      email
      createdOn
     }
    }
   }
  `,
    {
      variables: {
        name: data.name,
        email: data.email,
      },
    },
    false
  );
  return response.createCompany.data;
}

export async function publishCompany(data) {
  const response = await fetchAPI(
    `
   mutation publishCompany($id:ID!){
    publishCompany(revision:$id){
     data {
      id
      name
      email
     }
    }
   }
  `,
    {
      variables: {
        id: data.id,
      },
    },
    false
  );
  return response.publishCompany.data;
}
