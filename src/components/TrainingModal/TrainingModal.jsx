import Desktop from "../../img/desktop-Book.png";
import Mobile from "../../img/mobile-Book.png";
import Tablet from "../../img/tablet-Book.png";

const TrainingModal = (props) => {


  return (
    <div className=" relative h-96">
      <h1 className=" flex justify-center text-2xl font-macpaw font-medium text-white mb-8">
        Well done
      </h1>
      <div className="flex gap-12">
        <div className="text-modalTextColor mb-2 font-macpaw text-sm">
          Сorrect answers:
          <div className="flex flex-col gap-1">
            {props.isOpenModalTrainingWordData?.norm.map((e) => {
              return (
                <div className=" text-white font-macpaw font-medium" id={e}>
                  {e}
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-modalTextColor mb-2 font-macpaw text-sm">
          Mistakes:
          <div className="flex flex-col gap-1">
            {props.isOpenModalTrainingWordData?.wrong.map((e) => {
              return (
                <div className=" text-white font-macpaw font-medium" id={e}>
                  {e}
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-1 right-0">
          <img
            className="mx-auto w-38 "
            src={Desktop}
            srcSet={`${Mobile} 640w, ${Tablet} 1024w, ${Desktop} 1920w`}
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
            alt="Адаптивная иллюстрация"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingModal;
