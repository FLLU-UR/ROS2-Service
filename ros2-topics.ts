import * as Ros2Interfaces from '@universal-robots/ros2-interfaces';
import { QoSProfile, ReliabilityPolicy, DurabilityPolicy } from '@universal-robots/contribution-api';

export const Ros2Topics = {
    TARGET_JOINT_STATES: {
        name: '/target_joint_states',
        messageType: 'common_interfaces/sensor_msgs/msg/JointState',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeSensorMsgsJointState
    },
    JOINT_STATES: {
        name: '/joint_states',
        messageType: 'common_interfaces/sensor_msgs/msg/JointState',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeSensorMsgsJointState
    },
    ACTUAL_TCP_STATE: {
        name: 'actual_tcp_state',
        messageType: 'urinterfaces/msg/TCPState',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesTcpState
    },
    TARGET_TCP_STATE: {
        name: 'target_tcp_state',
        messageType: 'urinterfaces/msg/TCPState',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesTcpState
    },
    JOINT_TEMPERATURE: {
        name: 'joint_temperature',
        messageType: 'urinterfaces/msg/JointTemperature',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesJointTemperature
    },
    TOOL_TEMPERATURE: {
        name: 'tool_temperature',
        messageType: 'common_interfaces/sensor_msgs/msg/Temperature',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeSensorMsgsTemperature
    },
    CONTROL_CYCLE: {
        name: 'control_cycle',
        messageType: 'urinterfaces/msg/ControlCycle',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesControlCycle
    },
    EXECUTION_TIME: {
        name: 'execution_time',
        messageType: 'common_interfaces/sensor_msgs/msg/TimeReference',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeSensorMsgsTimeReference
    },
    SAFETY_STATUS: {
        name: 'safety_status',
        messageType: 'urinterfaces/msg/SafetyStatus',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesSafetyStatus
    },
    ROBOT_MODE: {
        name: 'robot_mode',
        messageType: 'urinterfaces/msg/RobotMode',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesRobotMode
    },
    ARM_POWERED_ON: {
        name: 'arm_powered_on',
        messageType: 'urinterfaces/msg/BoolStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesBoolStamped
    },
    JOINT_MODE: {
        name: 'joint_mode',
        messageType: 'urinterfaces/msg/JointMode',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesJointMode
    },
    PROGRAM_STATE: {
        name: 'program_state',
        messageType: 'urinterfaces/msg/RuntimeState',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesRuntimeState
    },
    TCP_OFFSET: {
        name: 'tcp_offset',
        messageType: 'common_interfaces/geometry_msgs/msg/PoseStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeGeometryMsgsPoseStamped
    },
    PAYLOAD: {
        name: 'payload',
        messageType: 'common_interfaces/geometry_msgs/msg/InertiaStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeGeometryMsgsInertiaStamped
    },
    CONTROL_BOX_DIGITAL_IO: {
        name: 'control_box_digital_io',
        messageType: 'urinterfaces/msg/DigitalIOStateStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 10),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesDigitalIoStateStamped
    },
    CONTROL_BOX_ANALOG_IO: {
        name: 'control_box_analog_io',
        messageType: 'urinterfaces/msg/AnalogIOStateStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 10),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesAnalogIoStateStamped
    },
    TOOL_DIGITAL_IO: {
        name: 'tool_digital_io',
        messageType: 'urinterfaces/msg/DigitalIOStateStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 10),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesDigitalIoStateStamped
    },
    TOOL_ANALOG_IO: {
        name: 'tool_analog_io',
        messageType: 'urinterfaces/msg/AnalogIOStateStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 10),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesAnalogIoStateStamped
    },
    TOOL_OUTPUT_MODE: {
        name: 'tool_output_mode',
        messageType: 'urinterfaces/msg/ToolOutputMode',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesToolOutputMode
    },
    TOOL_VOLTAGE_CURRENT: {
        name: 'tool_voltage_current',
        messageType: 'urinterfaces/msg/VoltageCurrentStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesVoltageCurrentStamped
    },
    ROBOT_VOLTAGE_CURRENT: {
        name: 'robot_voltage_current',
        messageType: 'urinterfaces/msg/VoltageCurrentStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesVoltageCurrentStamped
    },
    IO_CURRENT: {
        name: 'io_current',
        messageType: 'urinterfaces/msg/Current',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesCurrent
    },
    MAIN_VOLTAGE: {
        name: 'main_voltage',
        messageType: 'urinterfaces/msg/Float32Stamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesFloat32Stamped
    },
    JOINT_VOLTAGE: {
        name: 'joint_voltage',
        messageType: 'urinterfaces/msg/JointVoltage',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesJointVoltage
    },
    TOOL_ACCELEROMETER: {
        name: 'tool_accelerometer',
        messageType: 'common_interfaces/geometry_msgs/msg/AccelStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeGeometryMsgsAccelStamped
    },
    ACTUAL_SPEED_FRACTION: {
        name: 'actual_speed_fraction',
        messageType: 'urinterfaces/msg/SpeedSliderFraction',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesSpeedSliderFraction
    },
    TARGET_SPEED_FRACTION: {
        name: 'target_speed_fraction',
        messageType: 'urinterfaces/msg/SpeedSliderFraction',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesSpeedSliderFraction
    },
    TCP_FORCE_SCALAR: {
        name: 'tcp_force_scalar',
        messageType: 'urinterfaces/msg/Float64Stamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesFloat64Stamped
    },
    TCP_WRENCH: {
        name: 'tcp_wrench',
        messageType: 'common_interfaces/geometry_msgs/msg/WrenchStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.BEST_EFFORT, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeGeometryMsgsWrenchStamped
    },
    PROGRAM_RUNNING: {
        name: 'program_running',
        messageType: 'urinterfaces/msg/BoolStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesBoolStamped
    },
    TEACH_BUTTON_PRESSED: {
        name: 'teach_button_pressed',
        messageType: 'urinterfaces/msg/BoolStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesBoolStamped
    },
    POWER_BUTTON_PRESSED: {
        name: 'power_button_pressed',
        messageType: 'urinterfaces/msg/BoolStamped',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.TRANSIENT_LOCAL, 1),
        type: {} as Ros2Interfaces.IRosTypeUrinterfacesBoolStamped
    },
    TF: {
        name: '/tf',
        messageType: 'tf2_msgs/msg/TFMessage',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeTf2MsgsTfMessage
    },
    WORLD_MODEL_FRAMES: {
        name: 'world_model_frames',
        messageType: 'tf2_msgs/msg/TFMessage',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeTf2MsgsTfMessage
    },
    WORLD_MODEL_WAYPOINTS: {
        name: 'world_model_waypoints',
        messageType: 'tf2_msgs/msg/TFMessage',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeTf2MsgsTfMessage
    },
    ACTIVE_TCP_NAME: {
        name: 'active_tcp_name',
        messageType: 'tf2_msgs/msg/TFMessage',
        createQoSProfile: () => createQoSProfile(ReliabilityPolicy.RELIABLE, DurabilityPolicy.VOLATILE, 1),
        type: {} as Ros2Interfaces.IRosTypeTf2MsgsTfMessage
    }
}

    function createQoSProfile(reliabilty: ReliabilityPolicy, durability: DurabilityPolicy, depth: Number){
    const qoSProfile = new QoSProfile();
    qoSProfile.reliability = reliabilty
    qoSProfile.durability = durability
    return qoSProfile
}



