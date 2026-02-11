import { UserCircle } from "lucide-react";

const teamMembers = [
  { name: "Sam O", role: "Founder" },
  { name: "Graham", role: "Head of Engineering" },
  { name: "Steve", role: "Head of Operation" },
  { name: "Krishna", role: "Head of Technicalities" },
];

export const TeamSection = () => (
  <section id="team" className="py-20 bg-steel-gradient">
    <div className="container-industrial text-center mb-10">
      <h2 className="font-serif text-foreground text-3xl mb-4">Our Team</h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-10">
        Meet the passionate people behind Qubitedge.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white dark:bg-card p-7 rounded-xl shadow text-center"
          >
            <UserCircle className="w-14 h-14 mx-auto text-accent mb-4" />
            <h3 className="font-semibold text-xl text-foreground">
              {member.name}
            </h3>
            <p className="text-muted-foreground mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
