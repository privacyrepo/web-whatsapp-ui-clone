import { getAllJobsWithSlug, getJobBySlug } from "../../../lib/api";
import Description from "../../components/JobDetails/description";
export async function getStaticPaths() {
  const allJobs = await getAllJobsWithSlug();

  return {
    paths: allJobs.map((job) => {
      return {
        params: {
          slug: `/jobs/${job.slug}`,
        },
      };
    }),
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;

  const data = await getJobBySlug(params.slug);
  console.log("--------------------------", data);
  return {
    props: {
      job: {
        ...data.job.data,
      },
      moreJobs: data?.moreJobs,
    },
  };
}
export default function Job({ job, moreJobs }) {
  console.log("1111111111111111", job);
  return (
    <div className="bg-slate-700 text-white">
      <h1>{job.position}</h1>
      <h1>{job.slug}</h1>
      <h1>{job.createdOn}</h1>
      {/* <h1>{job.description[0].data.text}</h1> */}
      <Description />
    </div>
  );
}
