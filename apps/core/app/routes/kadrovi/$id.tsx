import { useParams } from "react-router";

export default function KadroviDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-800">Detail: {id}</h1>
      <p className="text-slate-600 mt-2">Dynamic route for ID: {id}</p>
    </div>
  );
}

