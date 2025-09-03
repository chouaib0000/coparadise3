import React from 'react';
import { Award, Shield, Star, ArrowLeft, Phone, Calculator, CheckCircle, Users, Zap, Heart } from 'lucide-react';

const AvantagesDetails = () => {
  const coverageTypes = [
    {
      title: 'Assurance collective santé',
      description: 'Couverture médicale complète pour vos employés',
      details: 'Médicaments, soins dentaires, vision, massothérapie et bien plus encore.',
      icon: Heart,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Régime de retraite',
      description: 'Planification financière pour l\'avenir de vos employés',
      details: 'REER collectif, participation de l\'employeur et conseils financiers personnalisés.',
      icon: Shield,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Assurance invalidité',
      description: 'Protection du revenu en cas d\'incapacité de travail',
      details: 'Couverture court et long terme pour maintenir le niveau de vie de vos employés.',
      icon: Star,
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const additionalBenefits = [
    'Programme d\'aide aux employés (PAE)',
    'Assurance vie collective',
    'Assurance voyage d\'affaires',
    'Télémédecine et soins virtuels',
    'Programmes de mieux-être',
    'Flexibilité des régimes'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => window.history.back()}
          className="mb-8 flex items-center text-orange-400 hover:text-orange-300 transition-colors duration-300 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Retour
        </button>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl glow-effect">
              <Award className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white">
              Avantages <span className="gradient-text bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Sociaux</span>
            </h1>
          </div>
          <p className="text-2xl text-orange-200 max-w-4xl mx-auto leading-relaxed">
            Attirez et retenez les meilleurs talents avec des programmes d'avantages sociaux compétitifs
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20 card-3d">
          <div className="relative overflow-hidden rounded-3xl">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="Équipe heureuse au travail"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/15 via-red-600/10 to-transparent"></div>
          </div>
        </div>

        {/* Coverage Types */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Programmes <span className="gradient-text bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">disponibles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageTypes.map((coverage, index) => (
              <div key={index} className="morphism rounded-2xl p-8 text-center card-3d">
                <div className={`bg-gradient-to-r ${coverage.gradient} p-4 rounded-xl glow-effect inline-block mb-6`}>
                  <coverage.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{coverage.title}</h3>
                <p className="text-orange-200 mb-4 font-semibold">{coverage.description}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{coverage.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Avantages <span className="gradient-text bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">supplémentaires</span>
          </h2>
          
          <div className="morphism rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0" />
                  <span className="text-white font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-white text-center mb-12">
            Pourquoi choisir <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Comparadise</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="morphism rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center">
                <Users className="h-8 w-8 text-blue-400 mr-3" />
                Expertise RH
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Notre équipe comprend les défis RH modernes et vous aide à créer des programmes 
                d'avantages qui attirent et fidélisent vos meilleurs employés.
              </p>
            </div>
            
            <div className="morphism rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center">
                <Zap className="h-8 w-8 text-emerald-400 mr-3" />
                Administration simplifiée
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Plateforme en ligne intuitive pour la gestion des régimes, support technique 
                dédié et formation complète pour votre équipe RH.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="morphism rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-white mb-6">
              Investissez dans vos employés
            </h3>
            <p className="text-xl text-gray-200 mb-8">
              Consultation gratuite pour évaluer vos besoins en avantages sociaux
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:18778601412'}
                className="group btn-3d bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg"
              >
                <Phone className="mr-3 h-6 w-6" />
                Consultation RH gratuite
              </button>
              
              <button 
                onClick={() => window.location.href = '/#soumission'}
                className="group btn-3d bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 glow-effect flex items-center justify-center text-lg"
              >
                <Calculator className="mr-3 h-6 w-6" />
                Devis avantages sociaux
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvantagesDetails;