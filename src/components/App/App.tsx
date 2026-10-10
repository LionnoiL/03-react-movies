import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import toast from "react-hot-toast";

const App = () => {
  const handlerOnSubmit = (query: string) => {
    toast.success(query);
  };

  return (
    <div className={css.app}>
      <Toaster />
      <SearchBar onSubmit={handlerOnSubmit}></SearchBar>
    </div>
  );
};

export default App;
