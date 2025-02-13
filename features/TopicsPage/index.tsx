import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { SortingState, IntegratedSorting } from "@devexpress/dx-react-grid";
import Paper from "@material-ui/core/Paper";
import { useRepositories } from "../useRepositories";

interface Repository {
  topics: string[];
}

const prepareTags = (repositories: Repository[]) => {
  const emptyAccumulator: { [key: string]: number } = {};
  return repositories
    .flatMap((repo) => repo.topics)
    .reduce(
      (acc, el) => ({
        ...acc,
        [el]: acc[el] ? acc[el] + 1 : 1,
      }),
      emptyAccumulator
    );
};

export default () => {
  const [repositories] = useRepositories();
  const tags = prepareTags(repositories);
  const data = Object.entries(tags).map(([key, value]) => ({
    topicName: key,
    topicCount: value,
  }));
  return (
    <Paper>
      <Grid
        columns={[
          {
            name: "topicName",
            title: "Topic Name",
          },
          {
            name: "topicCount",
            title: "Topic Count",
          },
        ]}
        rows={data}
      >
        <SortingState
          defaultSorting={[{ columnName: "topicCount", direction: "desc" }]}
        />
        <IntegratedSorting />
        <Table />
        <TableHeaderRow showSortingControls />
      </Grid>
    </Paper>
  );
};
