import type { ReactNode } from "react";

interface Props {

  title: string;

  description?: string;

  actions?: ReactNode;

}

export default function PageHeader({
  title,
  description,
  actions,
}: Props) {

  return (

    <div className="flex items-start justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">

          {title}

        </h1>

        {description && (

          <p className="mt-2 text-slate-500">

            {description}

          </p>

        )}

      </div>

      {actions}

    </div>

  );

}