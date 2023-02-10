import List from './List';

export default function Projects({ data }: { data: { projects: [] } }) {
  return (
    <section id='projects'>
      <List projects={data.projects} />
    </section>
  )
}