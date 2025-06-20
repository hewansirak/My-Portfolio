import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  const categories = ['Languages', 'Web Development', 'Database', 'DevOps', 'Tools'] as const;

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : <LucideIcons.Code size={24} />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="text-purple-400">
                          {getIcon(skill.icon)}
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Flutter', 'PyTorch','R', 'meTTa', 'TensorFlow', 'Tailwind CSS', 'Webpack', 'Jupyter Notebook',
              'Vite', 'Prisma', 'Socket.io', 'Django', 'Pandas', 'Numpy', 'Redis', 'Pinecone', 
              'Firebase', 'Vercel', 'SpaCy', 'OpenCV', 'LangChain', 'Scikit-learn', 'Keras', 'XGBoost',
              'Netlify', 'GitHub Actions', 'JIRA', 'Kubernetes', 
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/20 text-purple-400 rounded-full text-sm font-medium hover:border-purple-400 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;