interface LessonCardProps {
  title: string;
  description: string;
  progress: number;
  imageUrl: string;
}

const LessonCard = ({ title, description, progress, imageUrl }: LessonCardProps) => {
  return (
    <div className="card group hover:scale-[1.02] cursor-pointer">
      <div className="relative h-32 mb-4 rounded-xl overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LessonCard;