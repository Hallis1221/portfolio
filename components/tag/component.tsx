import { TechTag } from "../../lib/types/techtag";

export function TagComponent({ techTag }: { techTag: TechTag }) {
    return (
      <div className={`badge badge-info  ${techTag.color}`}>{techTag.title}</div>
    );
  }