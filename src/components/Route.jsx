import { useRouter } from "../hooks/useRouter.jsx";

export function Route ({ path, component: Component }) {
  const { currentPath } = useRouter();

  console.log({ currentPath, path });

  if (currentPath !== path) return null;
  return <Component />;
}