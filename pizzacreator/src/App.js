import Layout from "./components/layout/layout";
import PizzaBuilder from "./containers/pizza-builder/pizza-builder";

function App() {
  return (
    <div>
      <Layout>
        <PizzaBuilder />
      </Layout>
    </div>
  );
}

export default App;
