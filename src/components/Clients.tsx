import { clients } from "../constants";

const Clients = () => (
  <section
    id="clients"
    className={`flex-1 flex flex-row flex-wrap items-center justify-around gap-10 sm:gap-0`}
  >
    {clients.map((client, index) => (
      <img
        key={index}
        src={client.logo}
        alt={client.id}
        className="w-[192px] object-contain h-[60px] flex-shrink-0"
      />
    ))}
  </section>
);

export default Clients;
