import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Users, Sparkles, Swords, Award, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Animated Background with SPAM colors */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-spam-blue via-slate-950 to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-spam-blue/20 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-spam-yellow/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Hero Section - Hackathon Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center pt-8 md:pt-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <div className="inline-block bg-spam-yellow px-6 py-2 rounded-full mb-6">
              <p className="text-spam-blue-dark font-bold text-sm uppercase tracking-wider">December 13, 2025</p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-['Montserrat'] font-black text-6xl md:text-8xl lg:text-9xl mb-4 md:mb-6"
          >
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,222,58,0.3)]">SPAM</span>
            <br />
            <span className="text-spam-yellow drop-shadow-[0_0_40px_rgba(255,222,58,0.5)]">CUP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl text-slate-300 mb-8 font-medium"
          >
            A Red vs White Team Kendo Shiai
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="https://luma.com/rhgut8na"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-spam-yellow text-spam-blue-dark px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-spam-yellow/30 hover:shadow-spam-yellow/50 transition-all inline-block border-4 border-spam-yellow/50 hover:border-white/80"
            >
              Register Now
            </motion.a>
          </motion.div>
        </motion.section>

        {/* Info Cards Grid - Hackathon Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Date Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <Calendar className="w-10 h-10 text-spam-yellow mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">When</h3>
              <p className="text-slate-300">Dec 13, 2025</p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <MapPin className="w-10 h-10 text-spam-yellow mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Where</h3>
              <p className="text-slate-300">Aero Sports Center, QC</p>
            </motion.div>

            {/* Prize Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <Trophy className="w-10 h-10 text-spam-yellow mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Prize</h3>
              <p className="text-slate-300">SPAM</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Prize Highlight Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative bg-gradient-to-br from-spam-yellow via-yellow-400 to-spam-yellow rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-spam-yellow/30">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,71,171,0.3)_20px,rgba(0,71,171,0.3)_40px)]" />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.3, type: "spring" }}
              className="relative z-10"
            >
              <Award className="w-20 h-20 mx-auto mb-6 text-spam-blue-dark" />
              <h2 className="font-['Montserrat'] font-black text-5xl md:text-7xl text-spam-blue-dark mb-4">
                WINNERS GET SPAM
              </h2>
              <div className="inline-block bg-spam-blue-dark text-spam-yellow px-8 py-4 rounded-2xl text-4xl md:text-5xl font-black mb-4">
                SPAM
              </div>
              <p className="text-spam-blue-dark text-lg italic font-medium">
                #not sponsored by spam
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* About / Organizers Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Event Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Hosted By */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-spam-yellow/30 rounded-2xl p-8 hover:border-spam-yellow/50 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-spam-yellow" />
                <h3 className="text-xl font-bold text-spam-yellow">Hosted By</h3>
              </div>
              <p className="text-lg text-slate-200 leading-relaxed">
                United Kendokas from the Philippines
              </p>
            </motion.div>

            {/* Who Can Participate */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-spam-yellow/30 rounded-2xl p-8 hover:border-spam-yellow/50 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-spam-yellow" />
                <h3 className="text-xl font-bold text-spam-yellow">Who Can Participate?</h3>
              </div>
              <p className="text-lg text-slate-200 leading-relaxed">
                Open to all IGA-KEN members.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-spam-blue to-spam-blue-light rounded-2xl p-8 md:p-12 text-center">
            <Swords className="w-16 h-16 mx-auto mb-4 text-spam-yellow" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Compete?
            </h2>
            <p className="text-lg text-slate-200 mb-6 max-w-2xl mx-auto">
              Join now for an exciting day of competition, camaraderie, and SPAM.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-spam-yellow text-spam-blue-dark px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Updates
            </motion.button>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="text-center py-8 text-slate-400 text-sm"
        >
          <p>&copy; 2025 Spam Cup. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
