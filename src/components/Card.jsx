// components/Card.jsx
const Card = ({ title, children }) => (
  <div className="dark:border border-orange-700 p-4 rounded-lg shadow bg-white dark:bg-sky-950">
    {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
    {children}
  </div>
);
export default Card;
