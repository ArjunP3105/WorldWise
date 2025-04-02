import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const CitiesContext = createContext();
const Base_URL = "http://localhost:8000";

function reducer(state, action) {
  switch (action.type) {
    case "City/Loaded":
      return { ...state, cities: action.payload, isLoading: false };
    case "City/Current":
      return { ...state, currentCity: action.payload, isLoading: false };
    case "City/Create":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
        currentCity: action.payload,
      };
    case "City/Delete":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
      };
    case "Loading":
      return { ...state, isLoading: true };
    case "Error":
      return { ...state, error: action.payload };
    default:
      throw new Error("Something went wrong");
  }
}

const initalState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { cities, isLoading, currentCity } = state;

  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: "Loading" });
        const res = await fetch(`${Base_URL}/cities`);
        if (!res.ok) throw new Error("Error : Coudnt fetch data ");
        const data = await res.json();
        dispatch({ type: "City/Loaded", payload: data });
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      try {
        if (currentCity.id === Number(id)) return;
        dispatch({ type: "Loading" });
        const res = await fetch(`${Base_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "City/Current", payload: data });
      } catch {
        dispatch({ type: "Error", payload: "Error : Coudnt fetch data " });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    try {
      dispatch({ type: "Loading" });
      const res = await fetch(`${Base_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json ",
        },
      });
      const data = await res.json();
      dispatch({ type: "City/Create", payload: data });
    } catch {
      dispatch({ type: "Error", payload: "Error : Coudnt fetch data " });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "Loading" });
      await fetch(`${Base_URL}/cities/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      dispatch({ type: "City/Delete", payload: id });
    } catch {
      dispatch({ type: "Error", payload: "Coudnt delete city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext accessed outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
