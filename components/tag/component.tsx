import { TechTag } from "../../lib/types/techtag";

export function TagComponent({ techTag }: { techTag: TechTag }) {
  return (
    <a
      className={`badge badge-info  ${techTag.color}`}
      href={techTag.url}
      target="_blank"
      rel="noreferrer"
    >
      {techTag.title}
    </a>
  );
}
