"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

const courseProgress = [
  {
    id: "a1",
    title: "Advanced React Patterns",
    progress: 75,
    created_at: "2026-01-15",
  },
  {
    id: "b2",
    title: "TypeScript Deep Dive",
    progress: 40,
    created_at: "2026-02-20",
  },
  {
    id: "c3",
    title: "Node.js & REST APIs",
    progress: 90,
    created_at: "2026-03-05",
  },
  {
    id: "d4",
    title: "PostgreSQL & Drizzle ORM",
    progress: 55,
    created_at: "2026-04-10",
  },
  {
    id: "e5",
    title: "Next.js App Router",
    progress: 68,
    created_at: "2026-04-25",
  },
  {
    id: "f6",
    title: "System Design Basics",
    progress: 30,
    created_at: "2026-05-05",
  },
];

const chartData = courseProgress.map((c) => ({
  ...c,
  label: c.title.split(" ").slice(0, 2).join(" "),
}));

const getColor = (progress: number) => {
  if (progress >= 75) return "rgb(74, 222, 128)";
  if (progress >= 50) return "rgb(96, 165, 250)";
  return "rgb(239, 68, 68)";
};

interface Payload {
  payload: {
    title: string;
    progress: number;
  };
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Payload[];
}) => {
  if (active && payload?.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-popover border border-border rounded-lg px-3 py-2.5 text-sm text-foreground shadow-md">
        <p className="font-semibold mb-1">{d.title}</p>
        <p className="text-muted-foreground">
          Progress:{" "}
          <span
            style={{ color: getColor(d.progress) }}
            className="font-semibold"
          >
            {d.progress}%
          </span>
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartDisplay() {
  return (
    <section className="flex h-full min-h-0 flex-col rounded-2xl border border-border/70 bg-card/85 p-5 shadow-lg shadow-black/10 backdrop-blur-sm">
      <header className="shrink-0">
        <h2 className="text-xl font-semibold text-card-foreground">
          Course Progress
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Your learning activity across all enrolled courses
        </p>
      </header>

      <div className="mt-4 h-[300px] md:h-auto md:flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 8, right: 16, left: 0, bottom: 24 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgb(41, 41, 41)"
            />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 12, fill: "rgb(162, 162, 162)" }}
              angle={-35}
              textAnchor="end"
              interval={0}
              axisLine={{ stroke: "rgb(41, 41, 41)" }}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 12, fill: "rgb(162, 162, 162)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "rgb(49, 49, 49)", strokeWidth: 1 }}
            />
            <Line
              dataKey="progress"
              type="monotone"
              stroke="rgb(74, 222, 128)"
              strokeWidth={2}
              dot={(props) => {
                const { cx, cy, payload } = props;
                return (
                  <circle
                    key={payload.id}
                    cx={cx}
                    cy={cy}
                    r={5}
                    fill={getColor(payload.progress)}
                    stroke="rgb(23, 23, 23)"
                    strokeWidth={2}
                  />
                );
              }}
              activeDot={{
                r: 7,
                fill: "rgb(74, 222, 128)",
                stroke: "rgb(23, 23, 23)",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
