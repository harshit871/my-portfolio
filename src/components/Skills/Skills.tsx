interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
