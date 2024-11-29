import TabContainer from "@/components/tab-container/tab-container";
import { Box, Typography } from "@mui/material";

export default async function Home() {
  return (
   <TabContainer>
      <Box>
        <Typography variant="body2">
          Eu me chamo Gabriel Waltmann e moro em Campo Alegre - SC. Desenvolvo projetos com foco principal no Front End, desde 2020 venho desenvolvendo minhas habilidades no desenvolvimento Web.
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2">Frontend skills:</Typography>

        <Typography variant="body2">Javascript</Typography>
        <Typography variant="body2">Typescript</Typography>
        <Typography variant="body2">Reactjs</Typography>
        <Typography variant="body2">React Native</Typography>
        <Typography variant="body2">Vuejs</Typography>
        <Typography variant="body2">HTML</Typography>
        <Typography variant="body2">CSS</Typography>
        <Typography variant="body2">Tailwind</Typography>
        <Typography variant="body2">SCSS</Typography>
      </Box>

      <Box>
        <Typography variant="body2">Backend skills:</Typography>

        <Typography variant="body2">Javascript</Typography>
        <Typography variant="body2">Typescript</Typography>
        <Typography variant="body2">Nodejs</Typography>
        <Typography variant="body2">MongoDB</Typography>
        <Typography variant="body2">Postgres</Typography>
        <Typography variant="body2">Redis</Typography>
        <Typography variant="body2">Knex</Typography>
        <Typography variant="body2">Prisma</Typography>
        <Typography variant="body2">Firebase</Typography>
      </Box>
   </TabContainer>
  )
}