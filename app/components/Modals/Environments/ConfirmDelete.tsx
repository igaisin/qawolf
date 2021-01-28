import { ChangeEvent, useEffect, useRef, useState } from "react";

import { useDeleteEnvironment } from "../../../hooks/mutations";
import { Environment } from "../../../lib/types";
import { copy } from "../../../theme/copy";
import TextInput from "../../shared-new/AppTextInput";
import ModalConfirmDelete from "../../shared-new/ModalConfirmDelete";
import Text from "../../shared-new/Text";

type Props = {
  environment: Environment;
  onCancelClick: () => void;
};

export default function ConfirmDelete({
  environment,
  onCancelClick,
}: Props): JSX.Element {
  const [hasError, setHasError] = useState(false);
  const [name, setName] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  // focus text input
  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  const [deleteEnvironment, { loading }] = useDeleteEnvironment();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleDeleteClick = (): void => {
    if (name !== environment.name) {
      setHasError(true);
      return;
    }

    setHasError(false);
    deleteEnvironment({ variables: { id: environment.id } }).then(
      onCancelClick // return to main screen after envrionment deleted
    );
  };

  return (
    <ModalConfirmDelete
      isDeleteDisabled={loading}
      onCancelClick={onCancelClick}
      onDeleteClick={handleDeleteClick}
    >
      <Text
        color="gray9"
        margin={{ bottom: "medium", top: "xxsmall" }}
        size="componentParagraph"
      >
        {copy.environmentDeleteConfirm} <b>{environment.name}</b>{" "}
        {copy.environmentDeleteConfirm2}
      </Text>
      <TextInput
        hasError={hasError}
        onChange={handleChange}
        placeholder={environment.name}
        ref={ref}
        value={name}
      />
    </ModalConfirmDelete>
  );
}
